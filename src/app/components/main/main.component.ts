import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  miliseconds: number = 0;
  seconds: number = 0;
  minutes: number = 0;

  milisecondsInterval: any;
  secondsInterval: any;
  minutesInterval: any;

  isTimeRunning: boolean = false;
  isPressed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.code === "Space") {
      this.handleTimer();
    }

    this.isPressed = false;

  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {

    this.isPressed = true;

  }


  handleTimer() {

    if (!this.isTimeRunning) {

      this.incrementMiliseconds();
      this.incrementSeconds();
      this.incrementMinutes();

    } else {

      this.endTimers();

    }



  }

  incrementSeconds() {

    this.seconds = 0;

    this.isTimeRunning = true;
    this.secondsInterval = setInterval(() => {
      this.seconds++;
      this.miliseconds = 0;
    }, 1000)

  }

  incrementMiliseconds() {

    this.miliseconds = 0;

    this.isTimeRunning = true;
    this.milisecondsInterval = setInterval(() => {
      this.miliseconds++;
    }, 100)


  }

  incrementMinutes() {

    this.minutes = 0;

    this.isTimeRunning = true;
    this.minutesInterval = setInterval(() => {

      this.minutes++;
      this.seconds = 0;

    }, 60000)



  }


  endTimers() {

    this.isTimeRunning = false;

    clearInterval(this.secondsInterval);
    clearInterval(this.milisecondsInterval);
    clearInterval(this.minutesInterval);

    console.log("time", `${this.minutes}:${this.seconds},${this.miliseconds}`);

  }


}
