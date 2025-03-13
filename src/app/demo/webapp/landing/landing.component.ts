import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('featureInfo', { static: false }) firstFeature!: ElementRef;
  
  isTitleVisible: boolean = true;  // Controls visibility of the first section's H2

  features = [
    {
      title: 'Rewards',
      icon: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#09977C" fill-opacity="0.1"/><path d="M41.4692 35.7128C41.0548 36.1144 40.8644 36.6952 40.9588 37.2648L42.3812 45.1368C42.5012 45.804 42.2196 46.4792 41.6612 46.8648C41.114 47.2648 40.386 47.3128 39.7892 46.9928L32.7028 43.2968C32.4564 43.1656 32.1828 43.0952 31.9028 43.0872H31.4692C31.3188 43.1096 31.1716 43.1576 31.0372 43.2312L23.9492 46.9448C23.5988 47.1208 23.202 47.1832 22.8132 47.1208C21.866 46.9416 21.234 46.0392 21.3892 45.0872L22.8132 37.2152C22.9076 36.6408 22.7172 36.0568 22.3028 35.6488L16.5252 30.0488C16.042 29.58 15.874 28.876 16.0948 28.2408C16.3092 27.6072 16.8564 27.1448 17.5172 27.0408L25.4692 25.8872C26.074 25.8248 26.6052 25.4568 26.8772 24.9128L30.3812 17.7288C30.4644 17.5688 30.5716 17.4216 30.7012 17.2968L30.8452 17.1848C30.9204 17.1016 31.0068 17.0328 31.1028 16.9768L31.2772 16.9128L31.5492 16.8008H32.2228C32.8244 16.8632 33.354 17.2232 33.6308 17.7608L37.1812 24.9128C37.4372 25.436 37.9348 25.7992 38.5092 25.8872L46.4612 27.0408C47.1332 27.1368 47.6948 27.6008 47.9172 28.2408C48.1268 28.8824 47.946 29.5864 47.4532 30.0488L41.4692 35.7128Z" fill="#00F6FF"/></svg>',
      description: "The best credit cards offer some tantalizing combinations of promotions and prizes"
    },
    {
      title: '100% Secured',
      icon: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#09977C" fill-opacity="0.1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.5649 47.8619C31.742 47.9544 31.9402 48.0015 32.1383 47.9999C32.3364 47.9984 32.5329 47.9497 32.7117 47.8556L38.4203 44.8039C40.0392 43.941 41.3069 42.9761 42.2959 41.8527C44.4463 39.4051 45.6205 36.2813 45.5996 33.0602L45.5319 22.4352C45.5255 21.2114 44.7217 20.1194 43.533 19.7224L32.9131 16.1593C32.2736 15.9428 31.5729 15.9475 30.9447 16.1703L20.3651 19.8605C19.1828 20.2731 18.3935 21.373 18.3999 22.5983L18.4676 33.2155C18.4885 36.4413 19.7031 39.551 21.8889 41.9735C22.8876 43.0812 24.1665 44.032 25.8031 44.8808L31.5649 47.8619ZM30.0536 35.3743C30.292 35.6034 30.6013 35.7163 30.9106 35.7132C31.2198 35.7116 31.5275 35.5955 31.7627 35.3633L38.0012 29.213C38.47 28.7501 38.4651 28.0064 37.9916 27.5498C37.5164 27.0933 36.7513 27.0964 36.2825 27.5593L30.8929 32.8718L28.6861 30.7505C28.2109 30.294 27.4474 30.2987 26.977 30.7615C26.5083 31.2244 26.5131 31.9681 26.9883 32.4246L30.0536 35.3743Z" fill="#00F6FF"/></svg>',
      description: "We take proactive steps make sure your information and transactions are secure."
    },
    {
      title: 'Balance Transfer',
      icon: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#09977C" fill-opacity="0.1"/><path d="M45.497 16.9312C44.6967 16.1098 43.5122 15.8037 42.4077 16.1259L16.6532 23.6152C15.4879 23.939 14.662 24.8683 14.4395 26.0489C14.2122 27.2504 15.0061 28.7757 16.0433 29.4135L24.0962 34.3629C24.9222 34.8702 25.9882 34.743 26.6717 34.0537L35.8931 24.7749C36.3573 24.2917 37.1256 24.2917 37.5898 24.7749C38.0539 25.242 38.0539 25.999 37.5898 26.4821L28.3524 35.7625C27.6673 36.4503 27.5392 37.5213 28.0434 38.3524L32.9639 46.486C33.5401 47.4524 34.5325 48 35.621 48C35.749 48 35.8931 48 36.0211 47.9839C37.2696 47.8228 38.262 46.9692 38.6302 45.7612L46.2653 20.0397C46.6014 18.9444 46.2973 17.7526 45.497 16.9312" fill="#00F6FF"/></svg>',
      description: "A balance transfer credit card can save you a lot of money in interest charges."
    }
  ];

  constructor() {
    window.localStorage.setItem('landing', 'true');
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(([entry]) => {
      this.isTitleVisible = entry.isIntersecting; // Show/hide title based on visibility
    }, { threshold: 0.1 });

    if (this.firstFeature) {
      observer.observe(this.firstFeature.nativeElement);
    }
  }
}
