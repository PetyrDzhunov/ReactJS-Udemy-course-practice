import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function newMeetupPage() {
	function addMeetupHandler(enteredMeetupData) {
		console.log(enteredMeetupData)
	};

	return (

		<NewMeetupForm onAddMeetup={addMeetupHandler} />
	)
};
