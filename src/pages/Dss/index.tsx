import React, { useEffect } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import DssTable from '../../components/DssTable'
import { getDss, createDss, updateDss, deleteDss } from '../../redux/actions/dssAction'

const columns = [
  { title: 'Key', field: 'key', type: 'numeric', sorting: false },
  { title: 'DSS type', field: 'dss_type', type: 'string', sorting: false, lookup: { BLF: 'BLF', SPD: 'SPD' }},
  { title: 'Label', field: 'label', type: 'string', sorting: false },
  { title: 'Value', field: 'value', type: 'string', sorting: false }
]

const DssPage = (props) => {
  const { dss, getDss, createDss, updateDss, deleteDss } = props

  const deviceId = props.match.params.id

  useEffect(() => {
    getDss(deviceId)
  }, [])

  const addDss = (rowData) => {
    rowData.device = deviceId
    createDss(rowData).then(r => {
      getDss(deviceId)
    })
  }

  const editDss = (rowData) => {
    const { id, ...rest } = rowData
    updateDss(id, rest).then(r => {
      getDss(deviceId)
    })
  }

  const removeDss = (rowData) => {
    deleteDss(rowData.id).then(r => {
      getDss(deviceId)
    })
  }

  return (
    <React.Fragment>
      <DssTable
        title={'Speed Dial Buttons'}
        data={dss}
        columns={columns}
        addNewRow={addDss}
        updateRow={editDss}
        deleteRow={removeDss}
      />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  dss: state.dssReducer.dss
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getDss,
      createDss,
      updateDss,
      deleteDss
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DssPage)
