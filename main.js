

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8-Player'

const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBnt = $('.btn-next')
const prevBnt = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
var volumeBtn = $('.btn-volume-click');
var volumeControl = $('.volume-control')
var volumePull = $('.volume-progress')

var arRandom = []








const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isSong: false,
  
  // isopen = false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  
  songs: [
    {
      name: "1 Phut",
      singer: "Andiez",
      path: "./music/1-Phut-Andiez.mp3",
      image: "https://i.ytimg.com/vi/dLQe4qEfVJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCezqaYhoHvXELTkIDvSvMvoA-TQg"
    },
    {
      name: "Hẹn Một Mai",
      singer: "Bùi Anh Tuấn",
      path: "./music/Hen-Mot-Mai-4-Nam-2-Chang-1-Tinh-Yeu-OST-Bui-Anh-Tuan.mp3",
      image:
        "https://i.ytimg.com/vi/6Zw-SQurWUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcMWMkTt_oB-vwMM2g9LHLJUfTbA"
    },
    {
      name: "Bước Qua Nhau",
      singer: "Vũ",
      path:
        "./music/buoc-qua-nhau.mp3",
      image: "https://i.ytimg.com/vi/Vdm6i1m4tDE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRWwZ0JhZuiyRbVOwcbawkAfLJQw"
    },
    {
      name: "Thằng Điên",
      singer: "JUSTATEE x PHƯƠNG LY",
      path: "./music/thang-dien.mp3",
      image:
        "https://i.ytimg.com/vi/HXkh7EOqcQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwH8oLZs6Ba5Qv4Knkjsxr8Th4zA"
    },
    {
      name: "Sài Gòn đau lòng quá-Lofi",
      singer: "Lofi-1977",
      path: "./music/sai-gon-dau-long-qua.mp3",
      image:
        "https://i.ytimg.com/vi/BdPk9ipvczM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqBylj_ZqGWnwfaB6uLqHTIOSjTg"
    },
    {
      name: "Chẳng thể tìm được em",
      singer: "Lofi",
      path:
        "./music/chang-the-tim-duoc-em.mp3",
      image:
        "https://i.ytimg.com/vi/Eb8fj-jstNo/0.jpg"
    },
    {
      name: "Mình Xa Mình Yêu",
      singer: "JUUN D",
      path:
        "./music/minh-yeu-minh-xa.mp3",
      image:
        "https://i.ytimg.com/vi/NcCRnjdKhgI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB1hvEiPd0sO8N8meTJ2Y3Ec_X-8w"
    },
    {
      name: "Ngày chưa giông bão x Always Remember",
      singer: "Hòa MInzy x Văn Mai Hương",
      path:
        "./music/mash-up.mp3",
      image:
        "https://i.ytimg.com/vi/qiI4XNUoiyg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCOPNABe5ngkwNdRfupUY7LHVuBCw"
    },
    {
      name: "Có Hẹn Với Thanh Xuân",
      singer: "Monstar",
      path:
        "./music/co-hen-voi-thanh-xuan.mp3",
      image:
        "https://i.ytimg.com/vi/vpRi8S6uXAg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDehP8jYkEjK2t2e5_HhcFj9JX5kw"
    },
    {
      name: "Dịu Dàng Đến Em",
      singer: "ERIK",
      path:
        "./music/diu-dang-den-em.mp3",
      image:
        "https://i.ytimg.com/vi/lPvdv6n1Qx4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4pycBlrS1yS4cShKgWuqcbK_RdQ"
    },
    {
      name: "Em Thích",
      singer: " Sean X Lửa",
      path:
        "./music/em-thich-sean.mp3",
      image:
        "https://i.ytimg.com/vi/WDA7OIXXW1U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRtMMIcZ6Ye785GOmGC8CC1GRpTg"
    },
    {
      name: "Hạ Còn Vương Nắng",
      singer: "Hương Ly",
      path:
        "./music/ha-con-vuong-nang.mp3",
      image:
        "https://i.ytimg.com/vi/bpAip_10084/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiZRYnMAlQ4jhRWHJLZOgK1YepeQ"
    },
    {
      name: "Đường Tôi Chở Em Về",
      singer: "Datka",
      path:
        "./music/duong-toi-cho-em-ve.mp3",
      image:
        "https://i.ytimg.com/vi/OuNo8Tkb3lI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWPpcVkvaDfCWOdv9_IbtBN3gkoA"
    },
    {
      name: "Happy For You",
      singer: "Vũ X Lukas Graham ",
      path:
        "./music/happy-for-you.mp3",
      image:
        "https://i.ytimg.com/vi/mf4upAPwHEo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClaZ5hAqNrBbkLT6e--TkQf-ERSQ"
    },
    {
      name: "Tell Ur Mom",
      singer: "Winno",
      path:
        "./music/tell-ur-mom.mp3",
      image:
        "https://i.ytimg.com/vi/QHfjAlmHw4c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCWONI8YwyoUTWb5ngDalJlQ8qgw"
    },
    {
      name: "Thích Em Hơi Nhiều",
      singer: "Wren Evans",
      path:
        "./music/thich-em-hoi-nhieu.mp3",
      image:
        "https://i.ytimg.com/vi/faSVTByG0LQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxkLbBWyyr2MEKMtCn7O787Qq51w"
    },
    {
      name: "Thức Giấc",
      singer: "Dalad",
      path:
        "./music/thuc-giac.mp3",
      image:
        "https://i.ytimg.com/vi/R3trO4a49go/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQUFdWZJNQtkkeRlYDRdrB-forAw"
    },
    {
      name: "Sài Gòn Hôm Nay Mưa",
      singer: "Jsol",
      path:
        "./music/sai-gon-hom-nay-mua.mp3",
      image:
        "https://i.ytimg.com/vi/WbVbcOYJFJk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtUU-C-FazdMIp-ymub3aNDWiHtQ"
    },
    
  ],

  setConfig: function(key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
  },
  render: function() {
        const htmls = this.songs.map((song, index) => {
          return `
        <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
          <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
          </div>
          <div class="option">
              <i class="fas fa-ellipsis-h"></i>
          </div>
      </div>
          `
        })
        playlist.innerHTML = htmls.join('')
  },
  defineProperties: function() {
    Object.defineProperty(this, 'currentSong', {
      get: function() {
        return this.songs[this.currentIndex]
      }
    })
  },
  handleEvents : function() {
    const _this = this;
    const cdWidth = cd.offsetWidth;
// Xử lí CD quay và dừng  
  const cdThumbAnimate = cdThumb.animate([ {
   transform : 'rotate(360deg' 
 }], { 
   duration: 10000,
  iterations: Infinity
 })
 cdThumbAnimate.pause()
  //  xử lí phóng to thu nhỏ
      document.onscroll = function() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      const newCdWidth =  cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
      cd.style.opacity = newCdWidth / cdWidth

      }
      // xử lí khi click play
      playBtn.onclick = function() {
        if( _this.isPlaying) {
          audio.pause();
          
        }else{
          audio.play();
         
        }
       
      }

      // Khi song được play

      audio.onplay = function() {
        _this.isPlaying = true;
        player.classList.add('playing')
        
        cdThumbAnimate.play();
        
      }

      // Khi song bị pause 
      audio.onpause = function() {
        _this.isPlaying = false;
        player.classList.remove('playing')
        cdThumbAnimate.pause();
      }

      // Khi bài hát thay đổi thời gian phát
      audio.ontimeupdate = function() {
        if(audio.duration) {
          
          const progressPercent = Math.floor(audio.currentTime / audio.duration *100);
          progress.value = progressPercent
          
        }
       
      }
      // xử lí onchange khi tua song 
      progress.oninput = function(e) {
        const seekTime = e.target.value * audio.duration / 100;
        audio.currentTime = seekTime;
      }
      //  Khi next song
      nextBnt.onclick = function() {
        if(_this.isRandom) {
          _this.playRandomSong()
        }else {
          _this.nextSong()
          
        }
        audio.play();
        _this.render(); 
        _this.scrollToActiveSong();
      }
      //  Khi prev song
      prevBnt.onclick = function() {
        if(_this.isRandom) {
          _this.playRandomSong()
        }else {
          _this.prevSong()
          
        }
        audio.play();
        _this.render();
        _this.scrollToActiveSong();
      }
      // xử lí bật random/tắt random song
      randomBtn.onclick = function(e) {
        _this.isRandom = !_this.isRandom;
        _this.setConfig('isRandom', _this.isRandom)
        randomBtn.classList.toggle("active", _this.isRandom)
      }

      // xử lí next song khi audio ended 
      audio.onended = function() {
        nextBnt.click();
      }
      // Xử lí phát lại bài hát 
      repeatBtn.onclick = function() {
        _this.isRepeat = !_this.isRepeat;
        _this.setConfig('isRepeat', _this.isRepeat)
        repeatBtn.classList.toggle("active", _this.isRepeat)
      }
      // Xử lí next khi song audio ended
      audio.onended = function() {
        if(_this.isRepeat) {
          audio.play();
        }else {
          nextBnt.click()
        }
      }
      // lắng nghe hành vi click vào playlist
      playlist.onclick = function(e) {
        const songNode = e.target.closest('.song:not(.active)');
        
        if(songNode || e.target.closest('.option') ) {
          // xử lí khi click vào song 
          if(songNode) {
            _this.currentIndex = Number(songNode.dataset.index)
            _this.loadCurrentSong()
            _this.render();
            audio.play()

          }
        }
        
      }
      // tăng giảm âm lượng audio
      
      volumePull.oninput = function(e) {
        const currentVolume = e.target.value /100;
        audio.volume = currentVolume;
        
      }

      // bật tắt thanh tăng giảm volume
      var isopen = false;
        volumeBtn.onclick = function() {
          if(isopen) {
            isopen = false;
           volumeControl.style.display = 'none';
           
          }else{
            isopen = true;
            volumeControl.style.display = 'block';
          }
        }
      
      
  },
  scrollToActiveSong: function() {
    setTimeout(() => {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    },500)
  },
  loadCurrentSong: function() {
    

    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;

   
  },
  loadConfig: function() {
    this.isRandom = this.config.isRandom
    this.isRepeat = this.config.isRepeat
  },
  nextSong: function() {
    this.currentIndex++
    if(this.currentIndex >= this.songs.length ) {
      this.currentIndex = 0
    }
    this.loadCurrentSong();
  },
  prevSong: function() {
    this.currentIndex--
    if(this.currentIndex <0 ) {
      this.currentIndex = this.songs.length -1;
    }
    this.loadCurrentSong();
  },

  playRandomSong: function() {
    let newIndex
    let numlog
    let randomSuccess = false;
    if(arRandom.length >= this.songs.length) {
      arRandom.splice(0, arRandom.length)
    }
    do {
      newIndex = Math.floor(Math.random() * this.songs.length)
      if( !(arRandom.includes(newIndex)) && arRandom.length < this.songs.length ) {
        randomSuccess = true;
        
      }
    } while ( !randomSuccess)
 
  arRandom.push(newIndex)
  numlog = newIndex
   this.currentIndex = numlog;
   this.loadCurrentSong();
   console.log(arRandom)
  },


  start: function() {
    //  Gán cấu hình từ config vào object App 
        this.loadConfig()
// định nghĩa các thuộc tính
        this.defineProperties()

// lắng nghe các sự kiện DOM
        this.handleEvents()
// tải thông tin bài hát đầu tiên
      this.loadCurrentSong()

// render playlist
        this.render()

        this.playRandomSong()

  // Hiển thị trạng thái của repeat và random
  randomBtn.classList.toggle("active", this.isRandom)
  repeatBtn.classList.toggle("active", this.isRepeat)
  
  }


  
}



app.start()

































































