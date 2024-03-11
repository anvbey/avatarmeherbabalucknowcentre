import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'slot', headerName: 'Slot', width: 70, filterable: false, sortable: false, disableColumnMenu: true  },
  { field: 'name', headerName: 'Name', width: 130,  sortable: false, },
  { field: 'item', headerName: 'Item', width: 130, filterable: false, sortable: false, disableColumnMenu: true  },
  { field: 'from', headerName: 'From', width: 90, filterable: false, sortable: false, disableColumnMenu: true  },
  { field: 'to', headerName: 'To', width: 90, filterable: false, sortable: false, disableColumnMenu: true  },
];

const rows = [
  { id: 1, slot: 1, name: 'John Doe', item: 'Book', from: 'Library', to: 'Home' },
  { id: 2, slot: 2, name: 'Jane Doe', item: 'Laptop', from: 'Office', to: 'Home' },
  // Add more rows as needed
];

export default function DataTable() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        // disableColumnMenu
        disableColumnSelector  
        // want to hide column for column
      />
    </div>
  );
}
