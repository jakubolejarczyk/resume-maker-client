import { inject, Service } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MessageSeverity } from 'primeng/types/message';

@Service()
export class MessageUtil {
  private readonly messageService = inject(MessageService);

  run(severity: MessageSeverity, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }
}
