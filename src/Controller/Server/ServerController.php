<?php

/*
 * Senternal Hosting Control Panel
 * (c) Senternal LLC <http://www.senternal.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller\Server;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/server')]
#[IsGranted(User::ROLE_ADMIN)]
final class ServerController extends AbstractController
{
    /**
     * Catchall For Missing Pages
     */
    #[Route('/', name: 'server')]
    #[Route('/status', name: 'server_status')]
    #[Route('/reboot', name: 'server_reboot')]
    #[Route('/networking', name: 'server_networking')]
    public function slug(): Response {
        return $this->render('slug.html.twig');
    }
}