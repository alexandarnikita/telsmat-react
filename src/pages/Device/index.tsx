import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, FormControl, MenuItem } from '@material-ui/core'

import Table from '../../components/Table'
import { getDeviceModels } from '../../redux/actions/deviceModelActions'
import { getDevices, createDevice, updateDevice, deleteDevice } from '../../redux/actions/deviceAction'

const columns = [
  { title: 'Customer', field: 'customer', render: rowData => <Link to={`/dss/${rowData.id}`}>{ rowData.customer }</Link> },
  { title: 'Description', field: 'description'},
  { title: 'MAC', field: 'mac'},
  { title: 'Model', field: 'device_model'}
]

const Device = (props) => {
  const { deviceModel, devices, getDeviceModels, getDevices, createDevice, updateDevice, deleteDevice } = props
  const [ open, setOpen ] = useState('')
  const [ row, setRow ] = useState<any>(null)
  const [ deleteDialogOpen, setDeleteDialogOpen ] = useState(false)
  const [ device, setDevice ] = useState<any>({
    customer: '',
    description: '',
    mac: '',
    device_model: ''
  })

  useEffect(() => {
    getDeviceModels()
    getDevices()
  }, [])

  const handleSubmit = () => {
    if (open === 'add') {
      createDevice(device).then(r => {
        getDevices()
      })
    } else {
      updateDevice(row.id, device).then(r => {
        getDevices()
      })
    }

    handleClose()
  }

  const handleFormChange = (key) => (event) => {
    const newDevice = {
      ...device,
      [key]: event.target.value
    }
    setDevice(newDevice)
  }

  const handleOpenDialog = (open, rowData) => {
    setOpen(open)
    setRow(rowData)
    if (rowData) {
      const { id, tableData, ...rest } = rowData
      setDevice(rest)
    }
  }

  const handleClose = () => {
    setOpen('')
  }

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false)
  }

  const openDeleteDialog = (rowData) => {
    setDeleteDialogOpen(true)
    setRow(rowData)
  }

  const onDeleteDevice = () => {
    deleteDevice(row.id).then(r => {
      getDevices()
    })
    handleCloseDeleteDialog()
  }

  return (
    <React.Fragment>
      <Table
        title="Devices"
        columns={columns}
        data={devices}
        openDialog={handleOpenDialog}
        deleteDevice={openDeleteDialog}
      />
      <Dialog open={!!open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='xs'>
        <DialogTitle id="form-dialog-title">{open === 'add' ? 'Add New Device' : open === 'edit' ? 'Edit Device' : ' '}</DialogTitle>
        <DialogContent>
          <FormControl margin='normal' fullWidth>
            <TextField
              id="customer"
              label="Customer"
              variant='outlined'
              type='number'
              fullWidth
              required
              onChange={handleFormChange('customer')}
              defaultValue={open === 'edit' ? row?.customer : ''}
            />
          </FormControl>
          <FormControl margin='normal' fullWidth>
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              variant='outlined'
              fullWidth
              onChange={handleFormChange('description')}
              defaultValue={open === 'edit' ? row?.description : ''}
            />
          </FormControl>
          <FormControl margin='normal' fullWidth>
            <TextField
              id="mac"
              label="Mac"
              type="string"
              variant='outlined'
              fullWidth
              onChange={handleFormChange('mac')}
              defaultValue={open === 'edit' ? row?.mac : ''}
            />
          </FormControl>
          <FormControl margin='normal' fullWidth>
            <TextField
              id="outlined-select-model"
              select
              label="Model"
              onChange={handleFormChange('device_model')}
              variant="outlined"
              defaultValue={open === 'edit' ? row?.device_model : ''}
            >
              {
                deviceModel?.length > 0 && deviceModel.map((model) => (
                  <MenuItem key={model.id} value={model.id}>
                    {model.name}
                  </MenuItem>
                ))
              }
            </TextField>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            { open === 'add' ? 'Add' : 'Edit' }
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        max-width='xs'
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this device?"}</DialogTitle>
        <DialogContent />
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="default" variant='contained'>
            Cancel
          </Button>
          <Button onClick={onDeleteDevice} color="secondary" autoFocus variant='contained'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  deviceModel: state.deviceModelReducer.deviceModel,
  devices: state.deviceReducer.devices
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getDeviceModels,
      getDevices,
      createDevice,
      updateDevice,
      deleteDevice
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Device)
