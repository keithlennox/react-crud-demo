import React, { useContext } from 'react';
import {MyContext} from './App';
import ReactTable from 'react-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddEventForm from './AddEventForm';
import UpdateEventForm from './UpdateEventForm';
import 'react-table/react-table.css';

const Schedule = () => {
 
  const {schedule, setSchedule, editing, setEditing, setForm} = useContext(MyContext);

  //Edit event
  const editEvent = (row) => {
    console.log('Update button clicked');
    console.log(row);
    console.log(row.platform);
    setEditing(true);
    setForm({ id: row.id, platform: row.platform, start: row.start, end: row.end })
  }

  //Delete event
  const deleteEvent = (id) => {
    console.log('Delete button clicked');
    setSchedule(schedule.filter(schedule => schedule.id !== id))
  }

  //Create columns
  const columns = [
    {
      Header: 'Platform',
      accessor: 'platform',
    },{
      Header: 'Start',
      accessor: 'start',
    },{
      Header: 'End',
      accessor: 'end',
    },{
      Header: 'Actions',
      accessor: 'actions',
      width: 90,
      Cell: row => (
        <>
          <EditIcon style={{ fontSize: 18 }} onClick={() => editEvent(row.original)}></EditIcon>
          &nbsp;&nbsp;&nbsp;
          <DeleteIcon style={{ fontSize: 18 }} onClick={() => deleteEvent(row.original.id)} />
        </>
      ),
      style: {
        cursor: 'pointer', 
        textAlign: 'center'
      }
    }
  ]
  
  return (
    <div>
      <h1>Schedule</h1>
      <div>
        {
          editing ? (
            <>
              <h2>Update event</h2>
              <UpdateEventForm />
            </>
          ) : (
            <>
              <h2>Add event</h2>
              <AddEventForm />
            </>
          )
        }
      </div>
      <ReactTable
        data={schedule}
        columns={columns}
        sortable={true}
        className='-striped -highlight'
      />
    </div>
  );
}

export default Schedule;