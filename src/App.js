import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
const steps = [
  {
    id: '1',
    message: 'Hey you! Do you need any support? Please write your name',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, how can I help you?',
    trigger: '4',
  },



  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: 'Thanks you for sharing your problem. Please call me below to support better! Please, press any key',
    trigger: '6',
  },
  {
    id: '6',
    user: true,
    trigger: '7',
  },
  {
    id: '7',
    message: 'Contact Trung Anh: 0967276988 or following by link: fb.com/fidou',
    end: true,
  }
]


// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	//botAvatar: "src/images.png",
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Fidou Bot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
