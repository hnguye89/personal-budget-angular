import { Chart } from 'chart.js';
import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit{
  constructor(private http: HttpClient){}

  public dataSource = {
    labels: [
        'Eat out',
        'Rent',
        'Groceries',
        'Entertainment',
        'Healthcare',
        'Housing',
        'Medicine'
    ],
    datasets: [{
        label: 'Budget',
        data: [30, 350, 90, 50, 70, 500, 100],
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
        ],
        hoverOffset: 4
     }]
 };

  ngAfterViewInit(): void {
    this.http.get('http://localhost:4200/budget')
    .subscribe((res: any) => {
      for(var i = 0; i < res.myBudget.length; i++){
          this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
          this.dataSource.labels[i] = res.data.myBudget[i].title;
      }
      this.createChart();
    }
  )}

  createChart() {
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
 }

}
