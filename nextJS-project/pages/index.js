import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{ id: 'm1', title: 'A first meetup', image: "https://picsum.photos/200/300", address: "Main str. #1", description: "This is a first meetup" },
	{ id: 'm2', title: 'A second meetup', image: "https://picsum.photos/200/300", address: "Main str. #2", description: "This is a second meetup" },
	{ id: 'm3', title: 'A third meetup', image: "https://picsum.photos/200/300", address: "Main str. #3", description: "This is a third meetup " }
]

export default function HomePage(props) {
	return (
		<MeetupList meetups={props.meetups} />
	)

};

// export async function getStaticProps() {
// 	//fetch data from an API;
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		},
// 		revalidate: 10
// 	};
// };


export async function getServerSideProps(context) {
	// the difference from getStaticProps() is that  this page
	// is now pre-generated for every incomming request.
	// it runs on the server after deployment , not  during build process;

	// const req = context.req;
	// const res = context.res;

	// fetch data from an API;
	return {
		props: {
			meetups: DUMMY_MEETUPS
		}
	}
};