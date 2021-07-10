import React from "react";
import styled from "styled-components";
import MaterialTable from "material-table";

import tableIcons from "./icons";
import { Dss } from "../../resources/interfaces";

interface TableProps {
  title: string;
  data: Dss[];
  columns: any;
  addNewRow: (newData: Dss) => void;
  updateRow: (newData: Dss, oldData?: Dss) => void;
  deleteRow: (oldData: Dss) => void;
}

const TableContainer = styled.div`
  .MuiToolbar-root {
    div[class^="MTableToolbar-actions"] {
      span {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }

  .MuiTableCell-alignRight {
    text-align: left !important;
  }
`;

const Table = (props: TableProps) => {
  const { title, data, columns, addNewRow, updateRow, deleteRow } = props

  return (
    <TableContainer>
      <MaterialTable
        title={title}
        icons={tableIcons}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              addNewRow(newData);
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              updateRow(newData, oldData);
              resolve();
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              deleteRow(oldData);
              resolve();
            })
        }}
        options={{
          search: false,
          actionsColumnIndex: -1,
          overflowY: "auto",
          draggable: true,
          toolbar: true,
          paging: false,
          toolbarButtonAlignment: "right"
        }}
        columns={columns}
        data={data}
        localization={{
          body: {
            addTooltip: "Add New Row"
          }
        }}
      />
    </TableContainer>
  )
}

export default Table;
