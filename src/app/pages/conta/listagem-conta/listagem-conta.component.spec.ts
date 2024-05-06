import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemContaComponent } from './listagem-conta.component';

describe('ListagemContaComponent', () => {
  let component: ListagemContaComponent;
  let fixture: ComponentFixture<ListagemContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
