<?php

/*
 * Senternal Hosting Control Panel
 * (c) Senternal LLC <http://www.senternal.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class HomeController extends AbstractController
{

    #[Route('/', name: 'homepage')]
    public function index(Request $request): Response
    {
        return $this->render('index.html.twig');
    }
}