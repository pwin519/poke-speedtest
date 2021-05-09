import BackgroundService from 'react-native-background-actions';
import BackgroundJob from 'react-native-background-actions';
import ShareData from './ShareDataService';
const sleep = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));
class BService {
  constructor() {
    this.Options = {
      taskName: 'poke',
      taskTitle: ShareData.taskTitle,
      taskDesc: '按一下開啟App來關閉排程',
      taskIcon: {
        name: 'ic_notification',
        type: 'mipmap',
      },
      color: '#FFFFFF',
      //linkingURI: 'ResumePokeSpeedtest://homepage',
      parameters: {
        delay: 15000,
      },
    };
  }
  async VeryIntensiveTask(taskDataArguments) {
    const {delay} = taskDataArguments;
    await new Promise(async (resolve) => {
      var i = 0;
      for (let i = 0; BackgroundJob.isRunning(); i++) {
        fetch('http://ntpv3-1.speedtest.idv.tw:8080/')
          .then((response) => {
            // console.log(`times: ${i + 1}, response: ${response}`);
          })
          .catch((error) => {
            console.error(error);
          });
        //ShareData.taskTitle = `已經戳了Speedtest ${i} 次`;
        await sleep(delay);
      }
    });
  }
  Start() {
    BackgroundService.start(this.VeryIntensiveTask, this.Options);
  }
  Stop() {
    BackgroundService.stop();
  }
}
const pokeSpeedtestService = new BService();
export default pokeSpeedtestService;
