import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { loadNuxt } from 'nuxt'

class NuxtService {
  private nuxt: any

  public async render({ request }: HttpContextContract) {
    this.nuxt = await loadNuxt({ for: 'start' })

    const renderer = await this.nuxt.renderRoute(request.url())
    return renderer.html
  }
}

export default new NuxtService()
