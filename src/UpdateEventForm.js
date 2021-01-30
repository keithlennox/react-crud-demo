import React, { useContext } from 'react';
import {MyContext} from './App';

const UpdateEventForm = () => {

  const {schedule, setSchedule, setEditing, form, setForm} = useContext(MyContext);
  const initialFormState = { id: '', platform: '', start: '', end: '' }

  //Handle change
  const handleChange = event => {
    const { name, value } = event.target;
    setForm({...form, [name]: value });
  }

  //Handle cancel
  const handleCancel = () => {
    console.log('Cancel button clicked');
    setForm(initialFormState);
    setEditing(false);
  }

  //Handle update
  const updateEvent = (form) => {
    console.log('Update button clicked');
    setEditing(false);
    setSchedule(schedule.map(schedule => (schedule.id === form.id ? form : schedule)))
  }

  return (

    <form onSubmit={event => {
      event.preventDefault();
      updateEvent(form);
      }}
    >
      <label>Platform</label>
      <select name="platform" value={form.platform} onChange={handleChange}>
        <option value="Brightcove / tvo.org">Brightcove / tvo.org</option>
        <option value="Brightcove / TVO/Kids">Brightcove / TVO/Kids</option>
        <option value="Brightcove / ILC">Brightcove / TVO/Kids</option>
        <option value="Podcast / WordBomb">Podcast / WordBomb</option>
        <option value="YouTube / Docs">YouTube / TVOKids</option>
        <option value="YouTube / Preschool">YouTube / TVOKids</option>
        <option value="YouTube / TVOKids">YouTube / TVOKids</option>
      </select>
      <label>Start</label>
      <input type="text" name="start" value={form.start} onChange={handleChange} />
      <label>End</label>
      <input type="text" name="end" value={form.end} onChange={handleChange} />
      <button>Update event</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>

  )

}

export default UpdateEventForm;