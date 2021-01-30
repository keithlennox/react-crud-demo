import React, { useState } from 'react';
import Schedule from './Schedule';

//Schedule object
const initialSchedule = [
      {
        id: '1',
        platform: 'Brightcove / TVOKids',
        start: '2019-05-22 23:30',
        end: '2019-06-22 23:30'
      },{
        id: '2',
        platform: 'Brightcove / TVOKids',
        start: '2019-07-22 23:30',
        end: '2022-08-22 23:30'
      },{
        id: '3',
        platform: 'Brightcove / TVOKids',
        start: '2019-09-22 23:30',
        end: '2022-10-22 23:30'
      },{
        id: '4',
        platform: 'Podcast / Kids',
        start: '2018-05-22 23:30',
        end: '2021-05-22 23:30'
      },{
        id: '5',
        platform: 'YouTube / Paw Patrol',
        start: '2019-05-22 23:30',
        end: '2022-05-22 23:30'
      },{
        id: '6',
        platform: 'YouTube / Paw Patrol',
        start: '2019-08-22 23:30',
        end: '2022-11-22 23:30'
      }];

//Create context
const MyContext = React.createContext();

const App = () => {

  //Create state
  const [videoId, setVideoId] = useState(2);
  const [schedule, setSchedule] = useState(initialSchedule);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: '', platform: '', start: '', end: '' }
  const [form, setForm] = useState(initialFormState);

  return (
    <div>
      <MyContext.Provider value={{videoId, setVideoId, schedule, setSchedule, editing, setEditing, form, setForm}}>
        <Schedule/>
      </MyContext.Provider>
    </div>
  );
}

export { MyContext };
export default App;