(function(global, $) {

	var quotes = [
		{
			"quote": "Be kind whenever possible. It is always possible.",
			"source": "Dalai Lama"
		},
		{
			"quote": "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
			"source": "Norman Vincent Peale"
		},  
		{
			"quote": "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
			"source": "Jim Rohn"
		},		
		{
			"quote": "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
			"source": "Ayn Rand"
		},
		{	
			"quote": "If you're going through hell, keep going.",
			"source": "Winston Churchill"
		},		
		{
			"quote": "After a storm comes a calm.",
			"source": "Matthew Henry"
		},		
		{
			"quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
			"source": "Thomas A. Edison"
		},		
		{
			"quote": "Always do your best. What you plant now, you will harvest later.",
			"source": "Og Mandino"
		},		
		{
			"quote": "You are never too old to set another goal or to dream a new dream.",
			"source": "C. S. Lewis"
		},		
		{
			"quote": "he will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
			"source": "Confucius"
		},		
		{
			"quote": "With the new day comes new strength and new thoughts.",
			"source": "Eleanor Roosevelt"
		},		
		{
			"quote": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
			"source": "Wayne Dyer"
		},		
		{
			"quote": "Expect problems and eat them for breakfast.",
			"source": "Alfred A. Montapert"
		},		
		{
			"quote": "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
			"source": "Ken Venturi"
		},		
		{
			"quote": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
			"source": "Helen Keller"
		},		
		{
			"quote": "Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now.",
			"source": "Denis Waitley"
		},		
		{
			"quote": "Always continue the climb. It is possible for you to do whatever you choose, if you first get to know who you are and are willing to work with a power that is greater than ourselves to do it.",
			"source": "Ella Wheeler Wilcox"
		},		
		{
			"quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
			"source": "Thomas Jefferson"
		},		
		{
			"quote": "If you can dream it, you can do it.",
			"source": "Walt Disney"
		},		
		{
			"quote": "You have to learn the rules of the game. And then you have to play better than anyone else.",
			"source": "Albert Einstein"
		},		
		{
			"quote": "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
			"source": "Epictetus"
		},		
		{
			"quote": "Even if you fall on your face, you're still moving forward.",
			"source": "Victor Kiam"
		},		
		{
			"quote": "By failing to prepare, you are preparing to fail.",
			"source": "Benjamin Franklin"
		},		
		{
			"quote": "Either you run the day or the day runs you.",
			"source": "Jim Rohn"
		},		
		{
			"quote": "I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",
			"source": "Muhammad Ali"
		},		
		{
			"quote": "Act as if what you do makes a difference. It does.",
			"source": "William James"
		},		
		{
			"quote": "Things do not happen. Things are made to happen.",
			"source": "John F. Kennedy"
		},		
		{
			"quote": "The secret of getting ahead is getting started.",
			"source": "Mark Twain"
		},		
		{
			"quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
			"source": "Henry David Thoreau"
		},		
		{
			"quote": "Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much may be done if we are always doing.",
			"source": "Thomas Jefferson"
		},		
		{
			"quote": "Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love.",
			"source": "Miguel Angel Ruiz"
		},  
		{
			"quote": "In order to succeed, we must first believe that we can.",
			"source": "Nikos Kazantzakis"
		},  
		{
			"quote": "Well done is better than well said.",
			"source": "Benjamin Franklin"
		},  
		{
			"quote": "We are taught you must blame your father, your sisters, your brothers, the school, the teachers - but never blame yourself. It's never your fault. But it's always your fault, because if you wanted to change you're the one who has got to change.",
			"source": "Katharine Hepburn"
		},  
		{
			"quote": "Learning is the beginning of wealth. Learning is the beginning of health. Learning is the beginning of spirituality. Searching and learning is where the miracle process all begins.",
			"source": "Jim Rohn"
		},  
		{
			"quote": "The more man meditates upon good thoughts, the better will be his world and the world at large.",
			"source": "Confucius"
		},  
		{
			"quote": "Who seeks shall find.",
			"source": "Sophocles"
		},  
		{
			"quote": "If you want to succeed you should strike out on new paths, rather than travel the worn paths of accepted success.",
			"source": "John D. Rockefeller"
		},  
		{
			"quote": "Quality is not an act, it is a habit.",
			"source": "Aristotle"
		},  
		{
			"quote": "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
			"source": "Dale Carnegie"
		},  
		{
			"quote": "Follow your dreams, work hard, practice and persevere. Make sure you eat a variety of foods, get plenty of exercise and maintain a healthy lifestyle.",
			"source": "Sasha Cohen"
		},  
		{
			"quote": "Be gentle to all and stern with yourself.",
			"source": "Saint Teresa of Avila"
		},  
		{
			"quote": "Always desire to learn something useful.",
			"source": "Sophocles"
		},  
		{
			"quote": "If you don't like how things are, change it! You're not a tree.",
			"source": "Jim Rohn"
		},  
		{
			"quote": "If you ask me what I came into this life to do, I will tell you: I came to live out loud.",
			"source": "Emile Zola"
		},  
		{
			"quote": "Your talent is God's gift to you. What you do with it is your gift back to God.",
			"source": "Leo Buscaglia"
		},  
		{
			"quote": "Opportunity does not knock, it presents itself when you beat down the door.",
			"source": "Kyle Chandler"
		},  
		{
			"quote": "I've worked too hard and too long to let anything stand in the way of my goals. I will not let my teammates down and I will not let myself down.",
			"source": "Mia Hamm"
		},  
		{
			"quote": "True happiness involves the full use of one's power and talents.",
			"source": "John W. Gardner"
		},  
			{
			"quote": "Problems are not stop signs, they are guidelines.",
			"source": "Robert H. Schuller"
		},  
		{
			"quote": "The harder the conflict, the more glorious the triumph.",
			"source": "Thomas Paine"
		},  
		{
			"quote": "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed.",
			"source": "Robert H. Schuller"
		},  
		{
			"quote": "Set your sights high, the higher the better. Expect the most wonderful things to happen, not in the future but right now. Realize that nothing is too good. Allow absolutely nothing to hamper you or hold you up in any way.",
			"source": "Eileen Caddy"
		},  
		{
			"quote": "What you do today can improve all your tomorrows.",
			"source": "Ralph Marston"
		},  
		{
			"quote": "Know or listen to those who know.",
			"source": "Baltasar Gracian"
		},  
		{
			"quote": "It's always too early to quit.",
			"source": "Norman Vincent Peale"
		},  
		{
			"quote": "Never complain and never explain.",
			"source": "Benjamin Disraeli"
		},  
		{
			"quote": "Do your work with your whole heart, and you will succeed - there's so little competition.",
			"source": "Elbert Hubbard"
		},  
		{
			"quote": "Setting goals is the first step in turning the invisible into the visible.",
			"source": "Tony Robbins"
		},  
		{
			"quote": "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
			"source": "Mark Caine"
		},  
		{
			"quote": "You can't build a reputation on what you are going to do.",
			"source": "Henry Ford"
		},  
		{
			"quote": "What is called genius is the abundance of life and health.",
			"source": "Henry David Thoreau"
		},  
		{
			"quote": "The hardships that I encountered in the past will help me succeed in the future.",
			"source": "Philip Emeagwali"
		},  
		{
			"quote": "Set your goals high, and don't stop till you get there.",
			"source": "Bo Jackson"
		},  
		{
			"quote": "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
			"source": "Bradley Whitford"
		},  
		{
			"quote": "When you fail you learn from the mistakes you made and it motivates you to work even harder.",
			"source": "Natalie Gulbis"
		},  
		{
			"quote": "Leap, and the net will appear.",
			"source": "John Burroughs"
		},  
		{
			"quote": "To know oneself, one should assert oneself.",
			"source": "Albert Camus"
		},  
		{
			"quote": "You need to overcome the tug of people against you as you reach for high goals.",
			"source": "George S. Patton"
		},  
		{
			"quote": "The most effective way to do it, is to do it.",
			"source": "Amelia Earhart"
		},  
		{
			"quote": "Begin to be now what you will be hereafter.",
			"source": "William James"
		},  
		{
			"quote": "Motivation is the art of getting people to do what you want them to do because they want to do it.",
			"source": "Dwight D. Eisenhower"
		},  
		{
			"quote": "You can never quit. Winners never quit, and quitters never win.",
			"source": "Ted Turner"
		},  
		{
			"quote": "Go for it now. The future is promised to no one.",
			"source": "Wayne Dyer"
		},  
		{
			"quote": "Perseverance is failing 19 times and succeeding the 20th.",
			"source": "Julie Andrews"
		},  
		{
			"quote": "Crave for a thing, you will get it. Renounce the craving, the object will follow you by itself.",
			"source": "Swami Sivananda"
		},  
		{
			"quote": "You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.",
			"source": "Woodrow Wilson"
		},  
		{
			"quote": "Only the educated are free.",
			"source": "Epictetus"
		},  
		{
			"quote": "Fear cannot be without hope nor hope without fear.",
			"source": "Baruch Spinoza"
		},  
		{
			"quote": "Perseverance is not a long race; it is many short races one after the other.",
			"source": "Walter Elliot"
		},  
		{
			"quote": "Go big or go home. Because it's true. What do you have to lose?",
			"source": "Eliza Dushku"
		},  
		{
			"quote": "I can, therefore I am.",
			"source": "Simone Weil"
		},  
		{
			"quote": "In motivating people, you've got to engage their minds and their hearts. I motivate people, I hope, by example - and perhaps by excitement, by having productive ideas to make others feel involved.",
			"source": "Rupert Murdoch"
		},  
		{
			"quote": "To be wholly devoted to some intellectual exercise is to have succeeded in life.",
			"source": "Robert Louis Stevenson"
		},  
		{
			"quote": "You can't wait for inspiration. You have to go after it with a club.",
			"source": "Jack London"
		},  
		{
			"quote": "No matter how many goals you have achieved, you must set your sights on a higher one.",
			"source": "Jessica Savitch"
		},  
		{
			"quote": "Wherever you are - be all there.",
			"source": "Jim Elliot"
		},  
		{
			"quote": "Small deeds done are better than great deeds planned.",
			"source": "Peter Marshall"
		},  
		{
			"quote": "I've found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
			"source": "Brian Tracy"
		},  
		{
			"quote": "To be a good loser is to learn how to win.",
			"source": "Carl Sandburg"
		},  
		{
			"quote": "I learned that we can do anything, but we can't do everything... at least not at the same time. So think of your priorities not in terms of what activities you do, but when you do them. Timing is everything.",
			"source": "Dan Millman"
		},  
		{
			"quote": "Without hard work, nothing grows but weeds.",
			"source": "Gordon B. Hinckley"
		},  
		{
			"quote": "If you've got a talent, protect it.",
			"source": "Jim Carrey"
		},  
		{
			"quote": "You can't expect to hit the jackpot if you don't put a few nickels in the machine.",
			"source": "Flip Wilson"
		},  
		{
			"quote": "The wise does at once what the fool does at last.",
			"source": "Baltasar Gracian"
		},  
		{
			"quote": "I really believe that everyone has a talent, ability, or skill that he can mine to support himself and to succeed in life.",
			"source": "Dean Koontz"
		},  
		{
			"quote": "The will to succeed is important, but what's more important is the will to prepare.",
			"source": "Bobby Knight"
		},  
		{
			"quote": "Be thine own palace, or the world's thy jail.",
			"source": "John Donne"
		},  
		{
			"quote": "Poverty was the greatest motivating factor in my life.",
			"source": "Jimmy Dean"
		},  
		{
			"quote": "The ultimate aim of the ego is not to see something, but to be something.",
			"source": "Muhammad Iqbal"
		},  
		{
			"quote": "We make the world we live in and shape our own environment.",
			"source": "Orison Swett Marden"
		},  
		{
			"quote": "If you think you can do it, you can.",
			"source": "John Burroughs"
		},  
		{
			"quote": "I was motivated to be different in part because I was different.",
			"source": "Donna Brazile"
		},  
		{
			"quote": "The weeds keep multiplying in our garden, which is our mind ruled by fear. Rip them out and call them by name.",
			"source": "Sylvia Browne"
		},  
		{
			"quote": "The dog that trots about finds a bone.",
			"source": "Golda Meir"
		},  
		{
			"quote": "One way to keep momentum going is to have constantly greater goals.",
			"source": "Michael Korda"
		},  
		{
			"quote": "There is nothing deep down inside us except what we have put there ourselves.",
			"source": "Richard Rorty"
		},  
		{
			"quote": "One may miss the mark by aiming too high as too low.",
			"source": "Thomas Fuller"
		},  
		{
			"quote": "Do not weep; do not wax indignant. Understand.",
			"source": "Baruch Spinoza"
		},  
		{
			"quote": "Big shots are only little shots who keep shooting.",
			"source": "Christopher Morley"
		},  
		{
			"quote": "You never know what motivates you.",
			"source": "Cicely Tyson"
		}
	];

	global.randomQuote = function() {
		var index = Math.floor(Math.random() * quotes.length);
		return quotes[index];
	};
})(window, jQuery);
