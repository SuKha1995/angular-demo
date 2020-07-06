import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  movie: any = {}

  constructor(private ActivatedRoute: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params)=>{
      console.log(params)
      this.movieService.layChiTietphim(params.maPhim).subscribe((result)=>{
        console.log(result)
        this.movie = result;
      })
    });

   
  }

}
