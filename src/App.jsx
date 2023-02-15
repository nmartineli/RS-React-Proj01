import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/nmartineli.png',
			name: 'Natalia Martineli',
			role: 'Front-End Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2023-02-12 20:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/maykbrito.png',
			name: 'Mayk Brito',
			role: 'Educator @Rocketseat',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2023-02-11 20:00:00'),
	},
];

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return <Post author={post.author} content={post.content} publishedAt={post.publishedAt} />;
					})}
				</main>
			</div>
		</div>
	);
}

export default App;
