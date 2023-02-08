import { ProfileCommandRepository } from '../Infrastructure/Profile/Repository/Commands/profile-command.repository';
import { ProfileQueryRepository } from '../Infrastructure/Profile/Repository/Queries/profile-query.repository';
import { UserCommandRepository } from '../Infrastructure/User/Repository/Commands/user-command.repository';
import { UserQueryRepository } from '../Infrastructure/User/Repository/Queries/user-query.repository';

export const UserRepositoryProviders: any[] = [
    UserQueryRepository, UserCommandRepository, ProfileQueryRepository, ProfileCommandRepository
]