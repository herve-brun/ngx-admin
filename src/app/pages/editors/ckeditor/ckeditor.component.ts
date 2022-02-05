import { Component } from '@angular/core';
import * as Editor from '@ckeditor/ckeditor5-build-inline';

@Component({
  selector: 'ngx-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        CKEditor
      </nb-card-header>
      <nb-card-body>
        <ckeditor [editor]="ClassicEditor" [config]="{ height: '320' }"></ckeditor>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
  public ClassicEditor = Editor;
}
