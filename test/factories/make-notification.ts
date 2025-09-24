import { faker } from '@faker-js/faker'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import { Notification, NotificationProps } from '@/domain/notification/enterprise/entities/notification'

export function makeNotification(
  override: Partial<NotificationProps> = {},
  id?: UniqueEntityId,
) {
  const title = faker.lorem.words(4)
  const slug = Slug.createFromText(title)

  const notification = Notification.create(
    {
      recipientId: new UniqueEntityId(),
      title: faker.lorem.sentence(4),
      content: faker.lorem.sentence(10),
      ...override,
    },
    id,
  )

  return notification
}
