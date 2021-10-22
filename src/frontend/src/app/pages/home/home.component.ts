import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { developerList } from './data-devs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren('divAvatar') divAvatar!: QueryList<ElementRef<HTMLDivElement>>

  devsList = developerList

  constructor (private renderer: Renderer2) { }

  ngOnInit (): void {
    this.devsList.map((_dev) => {
      _dev.imageUrl = _dev.imageUrl || '/assets/images/avatar_blank.png'
      return _dev
    })
  }

  ngAfterViewInit (): void {
    this.divAvatar.forEach((_elementRef, index) => {
      const clientWidth = this.divAvatar.get(index)?.nativeElement.clientWidth
      this.renderer.setStyle(this.divAvatar.get(index)?.nativeElement, 'height', clientWidth + 'px')
    })
  }

}