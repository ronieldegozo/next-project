// localhost:3000/meet
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function meet(){

    function addMeetupHandler(data){
        console.log(data);
    }

    return(
        <NewMeetupForm onAddMeetups={addMeetupHandler} />        
    );
}

export default meet;