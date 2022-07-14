import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import express from 'express';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../core/guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: express.Request) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req: express.Request) {
    return req.user;
  }
}
