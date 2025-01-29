<?php

/*
 * Senternal Hosting Control Panel
 * (c) Senternal LLC <http://www.senternal.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller\DNS;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Controller used to manage blog contents in the backend.
 */

#[Route('/dns')]
#[IsGranted(User::ROLE_ADMIN)]
final class DNSController extends AbstractController
{
    /**
     * Catchall For Missing Pages
     */
    #[Route('/', name: 'dns')]
    #[Route('/zone-manager', name: 'dns_zone_manager')]
    #[Route('/add-zone', name: 'dns_add_zone')]
    #[Route('/delete-zone', name: 'dns_delete_zone')]
    #[Route('/add-host-entry', name: 'dns_add_host_entry')]
    #[Route('/edit-zone-template', name: 'dns_edit_zone_template')]
    #[Route('/mx-record-manager', name: 'dns_mx_record_manager')]
    #[Route('/routing-configuration', name: 'dns_routing_configuration')]
    #[Route('/global-dmarc', name: 'dns_global_dmarc')]
    #[Route('/global-dkim', name: 'dns_global_dkim')]
    #[Route('/ns-record-report', name: 'dns_ns_record_report')]
    #[Route('/park-domain', name: 'dns_park_domain')]
    #[Route('/cleanup', name: 'dns_cleanup')]
    #[Route('/set-zone-ttl', name: 'dns_set_zone_ttl')]
    #[Route('/domain-forwarding', name: 'dns_domain_forwarding')]
    #[Route('/sync-records', name: 'dns_sync_records')]
    public function slug(): Response {
        return $this->render('slug.html.twig');
    }
}