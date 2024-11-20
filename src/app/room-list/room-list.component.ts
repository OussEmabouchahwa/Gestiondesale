import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RoomService } from '../_services/room.service';

interface Room {
  name: string;
  capacity: number;
}

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule  // Ensure this module is imported
  ],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];  // Explicitly define the type of rooms
  displayedColumns: string[] = ['name', 'capacity'];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((data: Room[]) => {
      this.rooms = data;
    });
  }
}
