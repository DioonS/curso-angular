import { 
  Component,
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor () {
    this.log('constructor');
  }

  log(arg0: string) {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.log('ngOnInit');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
}
