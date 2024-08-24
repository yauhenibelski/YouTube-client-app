import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Card } from '@interface/card.interface';
import { Store } from '@ngrx/store';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { PaintBorderBottomDirective } from '@shared/directives/paint-border-bottom/paint-border-bottom.directive';
import { CardsActions } from '@store/cards/cards.actions';

@Component({
    selector: 'app-custom-card',
    standalone: true,
    imports: [MatCardModule, PaintBorderBottomDirective, CustomButtonComponent],
    templateUrl: './custom-card.component.html',
    styleUrl: './custom-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent {
    readonly content = input.required<Card>();

    constructor(private readonly store: Store) {}

    removeCard(): void {
        this.store.dispatch(CardsActions.deleteCard(this.content().id));
    }
}
