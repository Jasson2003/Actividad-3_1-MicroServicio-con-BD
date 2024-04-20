import { Test, TestingModule } from '@nestjs/testing';
import { UserCrudController } from './mailapp.controller';
import { UserCrudService } from './mailapp.service';

describe('UserCrudController', () => {
  let userCrudController: UserCrudController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserCrudController],
      providers: [UserCrudService],
    }).compile();

    userCrudController = app.get<UserCrudController>(UserCrudController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userCrudController.getHello()).toBe('Hello World!');
    });
  });
});
