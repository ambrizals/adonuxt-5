import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import NuxtService from 'App/Services/nuxt'

export default class TestsController {
  public async index(ctx: HttpContextContract) {
    await NuxtService.render(ctx)
  }
}
