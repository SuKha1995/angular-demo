import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  movieList: any[] = [];
  

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.layDanhSachPhim().subscribe((result)=> {
      console.log(result)

      this.movieList = result
    })
  }

  chonPhim(maPhim:string){
    //gọi tới service lấy
    this.movieService.layChiTietphim(maPhim).subscribe((result)=>{
      console.log(result);
      

    })
  }
  

}
