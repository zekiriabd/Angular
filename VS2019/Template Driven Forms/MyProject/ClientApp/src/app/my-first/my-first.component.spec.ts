import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MyFirstComponent } from './my-first.component';

let component: MyFirstComponent;
let fixture: ComponentFixture<MyFirstComponent>;

describe('my-First component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MyFirstComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MyFirstComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
