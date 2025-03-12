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
      title: 'Payment Gateway',
      subtitle: 'Transform the Way You Accept Payments with WowPe’s Advanced Payment Gateway',
      description: "WowPe offers a powerful and secure payment gateway designed to streamline online transactions for businesses of all sizes. Whether you're a startup or a large enterprise, our gateway enables you to accept payments effortlessly across multiple channels, including credit cards, debit cards, UPI, net banking, and digital wallets. With WowPe, you can provide your customers with a smooth and reliable checkout experience, boost your business's credibility, and grow faster in the digital landscape.",
      image: 'assets/demo/images/payment-fateway.png'
    },
    {
      title: 'Payouts',
      subtitle: 'Simplify Business Payments with Instant Payouts by WowPe',
      description: "WowPe’s innovative payout platform is designed to help businesses manage and disburse funds effortlessly. From vendor payments to employee salaries and customer refunds, our solution ensures secure, instant, and accurate transactions. Whether it's a one-time transfer or bulk payouts, WowPe enables your business to stay efficient and productive with 24/7 access to fast money transfers. Let WowPe take care of your payout needs while you focus on growing your business.",
      image: 'assets/demo/images/Payout.png'
    },
    {
      title: 'POS Machine',
      subtitle: 'WowPe POS Machines: The Future of In-Store Payments',
      description: "Take your in-store payment experience to the next level with WowPe POS machines. Designed for retail and on-the-go businesses, our POS devices accept multiple payment modes, including cards, UPI, and digital wallets, ensuring a smooth and secure checkout process. With real-time transaction tracking and a compact, portable design, WowPe POS machines enable you to deliver fast, reliable, and modern payment solutions for your customers. Elevate your customer experience and boost your business with cutting-edge POS technology.",
      image: 'assets/demo/images/pos-machine.png'
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
