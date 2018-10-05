import React from 'react';
import renderer from 'react-test-renderer';

import Post from './Post';

describe(`Post`, () =>
  it(`renders correctly when displaying an excerpt`, () => {
    const props = {
      date: "Sep. 16th, 2018",
      excerpt: "While the sting is fresh from  today’s entry into classic Vikings field goal kicking failures , I thought now would be as good a time as any to write up the top three Vikings failures of my life. Mind you, these aren’t the top three of  all  time. There are  much better guides  for that. These are…",
      image: {
        altText: "Minnesota Vikings on the field",
        fluid: {
          aspectRatio: 2.0984393757503,
          base64: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABwRZjKP/EABkQAAIDAQAAAAAAAAAAAAAAAAABAhJBE//aAAgBAQABBQJNHSBZGYz/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGq/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQITIi/9oACAEBAAY/As0LkxCj/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERIWExUYGhsf/aAAgBAQABPyFK8HJujxA5Zld0L0PoNZ//2gAMAwEAAgADAAAAEBc//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qqv/EABYRAAMAAAAAAAAAAAAAAAAAAAABYf/aAAgBAgEBPxBSKT//xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUGRsdH/2gAIAQEAAT8QrrAWm8BzVdXHSWDbM9eJsGADGHs4zr9whQGz8Sf/2Q==",
          sizes: "(max-width: 1370px) 100vw, 1370px",
          src: "/static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-00e90.jpg",
          srcSet: "/static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-a94d4.jpg 343w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-05436.jpg 685w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-00e90.jpg 1370w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-56b43.jpg 2055w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-0e53b.jpg 2740w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-5bd0b.jpg 4110w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-5a718.jpg 5244w",
          srcSetWebp: "/static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-69065.webp 343w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-2e3f9.webp 685w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-841b8.webp 1370w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-542ff.webp 2055w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-5bacb.webp 2740w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-fdb5c.webp 4110w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-81afd.webp 5244w",
          srcWebp: "/static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-841b8.webp",
        }
      },
      link: "/word/2018/09/16/vikings-failures/",
      title: "The top three soul-crushing Vikings failures of my life",
    };

    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  }));

describe(`Post`, () =>
  it(`renders correctly when displaying on a post page`, () => {
    const props = {
      date: "Sep. 16th, 2018",
      html: `<p>While the sting is fresh from <a href="https://www.dailynorseman.com/2018/9/16/17867446/minnesota-vikings-green-bay-packers-play-to-29-29-tie" target="_blank" rel="nofollow noopener noreferrer">today’s entry into classic Vikings field goal kicking failures</a>, I thought now would be as good a time as any to write up the top three Vikings failures of my life. Mind you, these aren’t the top three of <em>all</em> time. There are <a href="https://www.foxsports.com/nfl/gallery/minnesota-vikings-history-of-playoff-misery-atlanta-falcons-dallas-cowboys-oakland-raiders-011016" target="_blank" rel="nofollow noopener noreferrer">much better guides</a> for that. These are just the three that were the most devastating to me.</p> <h2>#3: Bountygate (2009 NFC Championship)</h2> <p>A good friend and I settled in at Chicago’s Vikings bar <a href="http://www.bar1events.com/redmonds/index.php" target="_blank" rel="nofollow noopener noreferrer">Redmond’s Ale House</a> on a freakishly beautiful spring-like day in January. My friend is a lifelong Lions fan, so no stranger to his team failing him repeatedly. But this game would epitomize the special ingredients that make Vikings failure unique: equal parts hope, moral victories, and no actual victory.</p> <p>There was hope that the traitorous Favre could bring a title to the arch rival of the Packers who would later retire his number. There were two moral victories. First, <a href="https://en.wikipedia.org/wiki/New_Orleans_Saints_bounty_scandal" target="_blank" rel="nofollow noopener noreferrer">justice came via Bountygate punishments</a> to the coaches and players that openly declared their game plan to injure Favre regardless of how many roughing penalties it took. Second, the NFL would change sudden death overtime rules because of this game. Yet, as always, it was the kick of the opposing team taking away hope of hoisting the Lombardi trophy at the end of another brutal post-season loss.</p> <h2>#2: Seattle shank (2016 NFC Wild Card)</h2> <p>That morning my wife and I along with another couple attended labor and delivery classes at Northwestern Memorial to prepare for one of life’s most joyous events: the birth of a first child. Afterwards the four of us headed down the street to <a href="http://www.timothyotooles.com/chicago/" target="_blank" rel="nofollow noopener noreferrer">Timothy O’Toole’s</a> to show our dear friends just how brutal Vikings playoff football can be.</p> <p>The game is being held outdoors in January because the Vikings didn’t currently have a stadium with a <a href="https://www.youtube.com/watch?v=AAyLX2hY7E0" target="_blank" rel="nofollow noopener noreferrer">roof that wouldn’t cave in</a>. It was a bitterly cold defensive struggle, but the Vikings could win if Blair Walsh simply nailed a 27-yard chip-shot field goal. Our friends assured me this game was in the bag. But, little did they know the long history of Vikings kicking failures.</p> <p>The kick doesn’t even make it halfway to the goal posts before <a href="https://www.youtube.com/watch?v=Mb_eXyhlHaA" target="_blank" rel="nofollow noopener noreferrer">Al Michaels exclaims</a> “The kick is no good!” and later “Not even close!” The day that started with joyful preparation ends in more purple-tinged soul-crushing failure. </p> <h2>#1: The kick (1998 NFC Championship)</h2> <p>In January of ‘99, I’m in Minnesota to attend the funeral of my late grandmother. The day after the service was the 1998 NFC Championship game. Our family, all diehard Vikings fans, gathered together to watch what was supposed to be a happy afternoon reprieve from the somber weekend.</p> <p>There was all the reason in the world to believe in a Vikings victory. They entered the game with a franchise-best record of 16-1 (undefeated at home). Their offense set the single-season scoring record. Their kicker was the first in NFL history to convert every field goal and extra point attempt in a regular season.</p> <p>Of course, with 2:11 left in the fourth quarter and a chance to put the Falcons away, <a href="http://www.nfl.com/videos/nfl-videos/0ap3000000497721/Gary-Anderson-misses-field-goal" target="_blank" rel="nofollow noopener noreferrer">Gary Anderson misses his first kick in nearly two years</a>. The defense crumbles and lets Atalanta march down the field to send the game into overtime. Atlanta wins the coin toss and kicks a game-winning field goal. Not even my late grandmother in heaven could prevent another Vikings post-season meltdown.</p> <p><small>Photo by Keith Allison from Hanover, MD, USA (Minnesota Vikings) [CC BY-SA 2.0 (<a href="https://creativecommons.org/licenses/by-sa/2.0" target="_blank" rel="nofollow noopener noreferrer">https://creativecommons.org/licenses/by-sa/2.0</a>)], via Wikimedia Commons</small></p>`,
      image: {
        altText: "Minnesota Vikings on the field",
        fluid: {
          aspectRatio: 2.0984393757503,
          base64: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABwRZjKP/EABkQAAIDAQAAAAAAAAAAAAAAAAABAhJBE//aAAgBAQABBQJNHSBZGYz/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGq/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQITIi/9oACAEBAAY/As0LkxCj/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERIWExUYGhsf/aAAgBAQABPyFK8HJujxA5Zld0L0PoNZ//2gAMAwEAAgADAAAAEBc//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qqv/EABYRAAMAAAAAAAAAAAAAAAAAAAABYf/aAAgBAgEBPxBSKT//xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUGRsdH/2gAIAQEAAT8QrrAWm8BzVdXHSWDbM9eJsGADGHs4zr9whQGz8Sf/2Q==",
          sizes: "(max-width: 1370px) 100vw, 1370px",
          src: "/static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-c18fe.jpg",
          srcSet: "/static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-27aa0.jpg 343w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-84b65.jpg 685w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-c18fe.jpg 1370w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-9213c.jpg 2055w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-00fa1.jpg 2740w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-f3085.jpg 4110w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-2cfbc.jpg 5244w",
          srcSetWebp: "/static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-69065.webp 343w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-2e3f9.webp 685w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-841b8.webp 1370w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-542ff.webp 2055w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-5bacb.webp 2740w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-fdb5c.webp 4110w, /static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-81afd.webp 5244w",
          srcWebp: "/static/vikings-failures-4f9fe19194ce20fbc90a4d0a6d8e3a86-841b8.webp",
        },
      },
      link: "/word/2018/09/16/vikings-failures/",
      title: "The top three soul-crushing Vikings failures of my life",
    };

    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
