<?php

/*
 * Senternal Hosting Control Panel
 * (c) Senternal LLC <http://www.senternal.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller\Database;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Controller used to manage blog contents in the backend.
 */

#[Route('/database')]
#[IsGranted(User::ROLE_ADMIN)]
final class DatabaseController extends AbstractController
{
    /**
     * Catchall For Missing Pages
     */
    #[Route('/', name: 'database')]
    #[Route('/root-password', name: 'database_root_password')]
    #[Route('/user-password', name: 'database_user_password')]
    #[Route('/user-list', name: 'database_user_list')]
    #[Route('/map-tool', name: 'database_map_tool')]
    #[Route('/configuration', name: 'database_configuration')]
    #[Route('/access-hosts', name: 'database_access_hosts')]
    #[Route('/list', name: 'database_list')]
    #[Route('/phpmyadmin', name: 'database_phpMyAdmin')]
    #[Route('/repair', name: 'database_repair')]
    #[Route('/processes', name: 'database_processes')]
    #[Route('/upgrade', name: 'database_upgrade')]
    public function slug(): Response {
        return $this->render('slug.html.twig');
    }
}