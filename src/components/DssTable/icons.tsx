import React, { forwardRef } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CheckIcon from "@material-ui/icons/Check";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ClearIcon from "@material-ui/icons/Clear";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import FilterListIcon from "@material-ui/icons/FilterList";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import RemoveIcon from "@material-ui/icons/Remove";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import SearchIcon from "@material-ui/icons/Search";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";

export default {
  Add: forwardRef((props: any, ref: any) => <AddBoxIcon {...props} ref={ref}/>),
  Check: forwardRef((props: any, ref: any) => <CheckIcon {...props} ref={ref} />),
  Clear: forwardRef((props: any, ref: any) => <ClearIcon {...props} ref={ref} />),
  Delete: forwardRef((props: any, ref: any) => <DeleteOutlineIcon {...props} ref={ref} />),
  DetailPanel: forwardRef((props: any, ref: any) => <ChevronRightIcon {...props} ref={ref} />),
  Edit: forwardRef((props: any, ref: any) => <EditIcon {...props} ref={ref} />),
  Export: forwardRef((props: any, ref: any) => <SaveAltIcon {...props} ref={ref} />),
  Filter: forwardRef((props: any, ref: any) => <FilterListIcon {...props} ref={ref} />),
  FirstPage: forwardRef((props: any, ref: any) => <FirstPageIcon {...props} ref={ref} />),
  LastPage: forwardRef((props: any, ref: any) => <LastPageIcon {...props} ref={ref} />),
  NextPage: forwardRef((props: any, ref: any) => <ChevronRightIcon {...props} ref={ref} />),
  PreviousPage: forwardRef((props: any, ref: any) => <ChevronLeftIcon {...props} ref={ref} />),
  ResetSearch: forwardRef((props: any, ref: any) => <ClearIcon {...props} ref={ref} />),
  Search: forwardRef((props: any, ref: any) => <SearchIcon {...props} ref={ref} />),
  SortArrow: forwardRef((props: any, ref: any) => <ArrowUpwardIcon {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props: any, ref: any) => <RemoveIcon {...props} ref={ref} />),
  ViewColumn: forwardRef((props: any, ref: any) => <ViewColumnIcon {...props} ref={ref} />),
};
