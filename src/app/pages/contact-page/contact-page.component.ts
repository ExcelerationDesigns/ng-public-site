import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  styleUrls: ['./contact-page.component.scss'],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent implements OnInit, AfterViewInit {

  contactUrl: string = 'https://bigsky.formstack.com/forms/edi_contact_form';
  lat: number = 39.7392;
  lng: number = -104.9903;
  mapStyle = [{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    elementType: 'labels.text.fill',
    featureType: 'administrative.locality',
    stylers: [{ color: '#d59563' }]
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'poi',
    stylers: [{ color: '#d59563' }]
  },
  {
    elementType: 'geometry',
    featureType: 'poi.park',
    stylers: [{ color: '#263c3f' }]
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'poi.park',
    stylers: [{ color: '#6b9a76' }]
  },
  {
    elementType: 'geometry',
    featureType: 'road',
    stylers: [{ color: '#38414e' }]
  },
  {
    elementType: 'geometry.stroke',
    featureType: 'road',
    stylers: [{ color: '#212a37' }]
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road',
    stylers: [{ color: '#9ca5b3' }]
  },
  {
    elementType: 'geometry',
    featureType: 'road.highway',
    stylers: [{ color: '#746855' }]
  },
  {
    elementType: 'geometry.stroke',
    featureType: 'road.highway',
    stylers: [{ color: '#1f2835' }]
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road.highway',
    stylers: [{ color: '#f3d19c' }]
  },
  {
    elementType: 'geometry',
    featureType: 'transit',
    stylers: [{ color: '#2f3948' }]
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'transit.station',
    stylers: [{ color: '#d59563' }]
  },
  {
    elementType: 'geometry',
    featureType: 'water',
    stylers: [{ color: '#17263c' }]
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'water',
    stylers: [{ color: '#515c6d' }]
  },
  {
    elementType: 'labels.text.stroke',
    featureType: 'water',
    stylers: [{ color: '#17263c' }]
  }
  ];
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
