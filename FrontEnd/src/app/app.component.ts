import { Component } from "@angular/core";
import { APIService } from "src/app/service/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "GitHub API Demo";

  data: any[];

  constructor(private apiService: APIService) {
    this.doGetCommits();
  }

  doGetCommits() {
    this.apiService.GetCommits().subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        var item = res[i];
        var date = new Date(item.commit.committer.date);
        var now = new Date();
        var interval = (now.getTime() - date.getTime()) / 1000;
        if (interval > 86400) {
          item.interval = (interval / 86400).toFixed(0) + " days ago";
        } else if (interval > 3600) {
          item.interval = (interval / 3600).toFixed(0) + " hours ago";
        } else {
          item.interval = (interval / 60).toFixed(0) + " minutes ago";
        }
      }
      this.data = res;
    });
  }

  onRefresh() {
    this.doGetCommits();
  }
}
