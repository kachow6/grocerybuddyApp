import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'gb-bootstrap-test',
  templateUrl: 'bootstrap-test.component.html',
  styleUrls: ['bootstrap-test.component.css'],
})
export class BootstrapTestComponent {
  public alerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];

  public reset(): void {
    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  }
}