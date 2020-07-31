import React from "react";

import VideoCard from "../videoCard/VideoCard";

import "./RecomendedVideos.css";

function RecomendedVideos() {
  return (
    <div className="recomendedVideos">
      <h2>Top Youtube Videos</h2>
      <div className="recomendedVideos__videos">
        <VideoCard
          image="https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg"
          title="Luis Fonsi - Despacito ft. Daddy Yankee"
          views="6,887,438,854 views"
          timestamp="Jan 12, 2017"
          channelImage="https://vignette.wikia.nocookie.net/youtube/images/4/43/Luis_Fonsi.png/revision/latest?cb=20190902100436"
          channel="Luis Fonsi"
          videoLink="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/JGwWNGJdvx8/sddefault.jpg"
          title="Ed Sheeran - Shape of You [Official Video]"
          views="4,912,316,339 views"
          timestamp="Jan 30, 2017"
          channelImage="https://pbs.twimg.com/media/EMjP8fpWwAEFZ-7.jpg"
          channel="Ed Sheeran"
          videoLink="https://www.youtube.com/watch?v=JGwWNGJdvx8"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/RgKAFK5djSk/maxresdefault.jpg"
          title="Wiz Khalifa - See You Again ft. Charlie [Official Video]"
          views="4,666,506,814 views"
          timestamp="Apr 6, 2015"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/6/6f/Wiz_Khalifa_Stavernfestivalen_2018_%28231822%29.jpg"
          channel="Wiz Khalifa"
          videoLink="https://www.youtube.com/watch?v=RgKAFK5djSk"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/neDP7tvqZdY/maxresdefault.jpg"
          title="Mark Ronson - Uptown Funk ft. Bruno Mars"
          views="3,904,703,796 views"
          timestamp="Nov 19, 2014"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mark_Ronson_and_Jennifer_Su%2C_2011_%28cropped%29.jpg/220px-Mark_Ronson_and_Jennifer_Su%2C_2011_%28cropped%29.jpg"
          channel="Mark Ronson"
          videoLink="https://www.youtube.com/watch?v=OPf0YbXqDm0"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg"
          title="PSY - GANGNAM STYLE(강남스타일) M/V"
          views="18,221,748 views"
          timestamp="May 25, 2011"
          channelImage="https://0.soompi.io/wp-content/uploads/2013/04/Psy2.jpg?s=900x600&e=t"
          channel="PSY"
          videoLink="https://www.youtube.com/watch?v=9bZkp7q19f0"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/fRh_vgS2dFE/maxresdefault.jpg"
          title="Justin Bieber - Sorry (PURPOSE : The Movement)"
          views="3,319,894,472 views"
          timestamp="Oct 22, 2015"
          channelImage="https://i.insider.com/5cfaa1c5594ea55b7a49a1b5?width=1136&format=jpeg"
          channel="Justin Bieber"
          videoLink="https://www.youtube.com/watch?v=fRh_vgS2dFE"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/09R8_2nJtjg/maxresdefault.jpg"
          title="Maroon 5 - Sugar (Official Music Video)"
          views="3,247,735,467 views"
          timestamp="Jan 14, 2015"
          channelImage="https://seated.imgix.net/7acdf73d-92aa-4932-b8ce-2084e1dc0025/69798988_10157526883998482_809116699776253952_o.jpg"
          channel="Maroon 5"
          videoLink="https://www.youtube.com/watch?v=09R8_2nJtjg"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg"
          title="Katy Perry - Roar (Official Music Video)"
          views="3,131,886,482 views"
          timestamp="Sep 5, 2013"
          channelImage="https://static.billboard.com/files/2020/03/katy-perry-2020-feb-ux-billboard-1548-1583347473-768x433.jpg"
          channel="Katy Perry"
          videoLink="https://www.youtube.com/watch?v=CevxZvSJLk8"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/zIOVMHMNfJ4/maxresdefault.jpg"
          title="Taylor Swift - Shake It Off (Official Music Video)"
          views="2,946,039,818 views"
          timestamp="Aug 18, 2014"
          channelImage="https://img.jakpost.net/c/2019/07/24/2019_07_24_76830_1563938895._large.jpg"
          channel="Taylor Swift"
          videoLink="https://www.youtube.com/watch?v=nfWlot6h_JM"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/7PCkvCPvDXk/maxresdefault.jpg"
          title="Meghan Trainor - All About That Bass"
          views="2,387,526,398 views"
          timestamp="Jun 11, 2014"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Meghan_Trainor_in_2020.png/220px-Meghan_Trainor_in_2020.png"
          channel="Meghan Trainor"
          videoLink="https://www.youtube.com/watch?v=7PCkvCPvDXk"
        />
      </div>
    </div>
  );
}

export default RecomendedVideos;
