export const musicModes={focus:'집중을 위한 음악',energy:'활력을 위한 음악'};
export function createMusic({audio,storage,key='logic-link:music:v1',onChange=()=>{}}){
 let mode='focus',volume=.35,playing=false,error='',epoch=0;
 try{const saved=JSON.parse(storage?.getItem(key)||'{}');if(musicModes[saved.mode])mode=saved.mode;if(Number.isFinite(saved.volume))volume=Math.min(1,Math.max(0,saved.volume));}catch{}
 audio.loop=true;audio.preload='none';audio.volume=volume;
 const source=()=>{audio.src=new URL('./assets/music/'+mode+'.wav',import.meta.url).href;};source();
 const state=()=>({mode,volume,playing,error});const notify=()=>onChange(state());
 function save(){try{storage?.setItem(key,JSON.stringify({mode,volume}));}catch{}}
 function pause(){epoch++;audio.pause();playing=false;error='';notify();}
 async function play(){const ticket=++epoch;error='';try{await audio.play();if(ticket!==epoch)return false;playing=true;notify();return true;}catch{if(ticket===epoch){playing=false;error='음악을 시작하지 못했어요. 재생을 다시 누르세요.';notify();}return false;}}
 async function setMode(value){if(!musicModes[value]||value===mode)return;const resume=playing;pause();mode=value;source();save();notify();if(resume)await play();}
 function setVolume(value){const v=Number(value);if(!Number.isFinite(v))return;volume=Math.min(1,Math.max(0,v));audio.volume=volume;save();notify();}
 audio.addEventListener('error',()=>{epoch++;playing=false;error='음악 파일을 불러오지 못했어요. 연결 상태를 확인한 뒤 다시 재생해 주세요.';notify();});
 return{play,pause,setMode,setVolume,get state(){return state();}};
}
export function bindMusicControls(){
 const mode=document.getElementById('music-mode'),toggle=document.getElementById('music-toggle'),volume=document.getElementById('music-volume'),status=document.getElementById('music-status');
 const audio=document.createElement('audio');audio.id='library-music';audio.setAttribute('aria-hidden','true');document.body.append(audio);
 let storage;try{storage=localStorage;}catch{}
 const music=createMusic({audio,storage,onChange:paint});
 function paint(s){mode.value=s.mode;volume.value=Math.round(s.volume*100);document.getElementById('music-volume-label').value=Math.round(s.volume*100)+'%';toggle.textContent=s.playing?'음악 일시정지':'음악 재생';toggle.setAttribute('aria-pressed',String(s.playing));status.textContent=s.error||(s.playing?'♪ '+musicModes[s.mode]+' · 책을 바꿔도 이어져요.':'재생을 누르면 이어서 들을 수 있어요.');}
 mode.onchange=()=>music.setMode(mode.value);volume.oninput=()=>music.setVolume(Number(volume.value)/100);toggle.onclick=()=>music.state.playing?music.pause():music.play();paint(music.state);return music;
}
