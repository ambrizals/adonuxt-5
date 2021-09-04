import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import NuxtService from 'App/Services/nuxt'

export default class NuxtsController {
  public async index(ctx: HttpContextContract) {
    const renderer = NuxtService.render(ctx)
    return renderer
  }
}
