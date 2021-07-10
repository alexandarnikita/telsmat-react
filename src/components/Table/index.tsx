import React from 'react'
import styled from 'styled-components'
import MaterialTable from 'material-table'
import { Add, Edit, Delete } from '@material-ui/icons'

import tableIcons from './icons'
import { Device } from '../../resources/interfaces'

interface TableProps {
  title: string;
  data: Device[];
  columns: any;
  openDialog: (open: string, rowData?: Device | Device[]) => void
  deleteDevice: (rowData: Device | Device[]) => void
  onPageChange: (page: number, pageSize: number) => void
  page?: number
  totalCount?: number
  onSearchChange?: (searchText: string) => void
}

const TableContainer = styled.div`
  .MuiToolbar-root {
    div[class^='MTableToolbar-actions'] {
      span {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
`;

const Table = (props: TableProps) => {
  const { title, data, columns, openDialog, deleteDevice, onPageChange, page, totalCount, onSearchChange } = props

  return (
      <TableContainer>
        <MaterialTable
          title={title}
          actions={[
            {
              icon: Add,
              tooltip: 'Add new device',
              isFreeAction: true,
              onClick: () => openDialog('add')
            },
            {
              icon: Edit,
              tooltip: 'Edit Device',
              onClick: (event, rowData) => openDialog('edit', rowData)
            },
            {
              icon: Delete,
              tooltip: 'Delete Device',
              onClick: (event, rowData) => deleteDevice(rowData)
            }
          ]}
          icons={tableIcons}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            overflowY: 'auto',
            draggable: true,
            toolbar: true,
            toolbarButtonAlignment: 'right'
          }}
          columns={columns}
          data={data}
          localization={{
            body: {
              addTooltip: 'Add New Row'
            }
          }}
          onChangePage={onPageChange}
          page={page}
          totalCount={totalCount}
          onSearchChange={onSearchChange}
        />
      </TableContainer>
  )
}

export default Table;
