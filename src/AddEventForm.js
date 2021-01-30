import React, { useContext } from 'react';
import {MyContext} from './App';

const AddEventForm = () => {

  const {schedule, setSchedule, form, setForm} = useContext(MyContext);
  const initialFormState = { id: '', platform: '', start: '', end: '' }

  //Handle change
  const handleChange = event => {
    const { name, value } = event.target;
    setForm({...form, [name]: value });
  }

  //Add event
  const addEvent = form => {
    console.log('Add button clicked');
    setSchedule([...schedule, form]);
  }

  return (

    <form onSubmit={event => {
      event.preventDefault();
      addEvent(form);
      setForm(initialFormState);
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
      <button>Add new event</button>
    </form>

  )

}

export default AddEventForm