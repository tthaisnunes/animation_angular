import { trigger, animate, style, query, stagger, transition } from '@angular/animations';

export const homePageAnimation =
  trigger('homeComponent', [
    transition('* => show', [
      query('div', style({ transform: 'translateY(-100%)' })),
      query('div',
        stagger('500ms', [
          animate('1500ms cubic-bezier(0.86, 0, 0.07, 1)', style({ transform: 'translateY(0%)' }))
        ])
      )
    ])
  ]);
