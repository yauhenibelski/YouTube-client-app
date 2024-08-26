import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Card } from '@interface/card.interface';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { PaintBorderBottomDirective } from '@shared/directives/paint-border-bottom/paint-border-bottom.directive';
import { CardStore } from '../../../../store-signal/cards-store';

@Component({
    selector: 'app-custom-card',
    standalone: true,
    imports: [MatCardModule, PaintBorderBottomDirective, CustomButtonComponent],
    templateUrl: './custom-card.component.html',
    styleUrl: './custom-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent {
    private readonly cardStore = inject(CardStore);

    readonly content = input.required<Card>();

    removeCard(): void {
        this.cardStore.deleteCard(this.content().id);
    }
}
