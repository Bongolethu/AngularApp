import { isNullOrUndefined } from 'util';
import { Input,  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TreeviewService} from './treeview.service'
import { TreeModule } from 'angular-tree-component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{

 	private nodes: any;
  private nodeData : any;
  private childrenData : any;
  constructor(private router : Router,private svcTreeView: TreeviewService){

  }
  onEvent = ($event) => {

      if( isNullOrUndefined($event.node.data.children) )
      {
        this.childrenData = [];
      }
      else
      {
        this.childrenData = $event.node.data.children;
      }
  }
  ngOnInit()
  {
     this.svcTreeView.GetMenuTreeData()
     .then(s=>{

                this.nodes = JSON.parse(s._body) ;
                var res = this.nodes.toString();
                var res = res.substring(17, res.length - 2)  //conforming to the data expected by the <tree-root>
                this.nodeData = JSON.parse(res)
            }).catch(function(error) {
              // error would be caught here and actioned accordingly
              console.log('error ' + error);
            });


  }

}

