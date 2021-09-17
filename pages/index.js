import MeetupList from '../components/meetups/MeetupList';

const DUMMY = [
    {
        id: 'ID1',
        title: 'NextJS',
        image: 'https://miro.medium.com/max/800/1*bc9pmTiyKR0WNPka2w3e0Q.png',
        address: 'San Mateo Rizal',
        description: 'This is Roniel Description'
    },
    {
        id: 'ID2',
        title: 'REACTJS',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        address: 'Rizal',
        description: 'This is Roniel2 Description'
    }
]

function index(){
    return(
        <MeetupList meetups={DUMMY} />
    );
}

export default index;