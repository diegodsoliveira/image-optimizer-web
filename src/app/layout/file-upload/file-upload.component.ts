import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  isDragging = false;

  handleDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  handleDragLeave(event: DragEvent) {
    this.isDragging = false;
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      // Manipule os arquivos aqui, ex: upload para o servidor
      console.log('Arquivos soltos:', files);
    }
  }
}
